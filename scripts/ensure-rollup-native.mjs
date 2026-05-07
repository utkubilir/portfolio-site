import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const workspaceRoot = process.cwd()
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'

const supportedTargets = {
  darwin: ['darwin-arm64', 'darwin-x64'],
}

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'))
}

function getRollupVersion() {
  const rollupPackagePath = path.join(workspaceRoot, 'node_modules', 'rollup', 'package.json')

  if (!existsSync(rollupPackagePath)) {
    throw new Error(
      'Rollup is not installed yet. Run "npm install" before starting the dev server.',
    )
  }

  return readJson(rollupPackagePath).version
}

function getMissingTargets(platform) {
  const candidates = supportedTargets[platform] ?? []

  return candidates.filter((target) => {
    const targetPackagePath = path.join(
      workspaceRoot,
      'node_modules',
      '@rollup',
      `rollup-${target}`,
      'package.json',
    )

    return !existsSync(targetPackagePath)
  })
}

function installRollupTarget(target, version) {
  const [, cpu] = target.split('darwin-')
  const packageSpec = `@rollup/rollup-${target}@${version}`

  console.log(`[rollup-native] Installing ${packageSpec}`)

  execFileSync(
    npmCommand,
    ['install', packageSpec, '--no-save', '--os=darwin', `--cpu=${cpu}`],
    {
      cwd: workspaceRoot,
      stdio: 'inherit',
    },
  )
}

function ensureRollupNative() {
  const missingTargets = getMissingTargets(process.platform)

  if (missingTargets.length === 0) {
    return
  }

  const version = getRollupVersion()

  for (const target of missingTargets) {
    installRollupTarget(target, version)
  }
}

ensureRollupNative()
