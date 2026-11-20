import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { join } from 'node:path'

const root = process.cwd()

const CRUCE_PDFS = [
  'public/pdfs/cruce-de-los-andes.html',
  'public/pdfs/en/cruce-de-los-andes.html',
  'public/pdfs/pt/cruce-de-los-andes.html',
]

describe('public PDF HTML smoke', () => {
  for (const rel of CRUCE_PDFS) {
    it(`${rel} exists and has season dates block`, () => {
      const path = join(root, rel)
      assert.equal(existsSync(path), true, `missing ${rel}`)
      const html = readFileSync(path, 'utf8')
      assert.match(html, /FECHAS TEMPORADA|SEASON DATES|DATAS DA TEMPORADA/i)
      assert.match(html, /Enero 2027|January 2026|Janeiro 2026/)
    })
  }
})

describe('app entrypoints', () => {
  it('has app/page.tsx', () => {
    assert.equal(existsSync(join(root, 'app/page.tsx')), true)
  })

  it('package.json has lint, typecheck, test', () => {
    const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
    for (const s of ['lint', 'typecheck', 'test']) {
      assert.ok(pkg.scripts?.[s], `missing script: ${s}`)
    }
  })
})
