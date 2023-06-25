import { BibleController } from '../modules/bible/controllers/BibleController'
import { getRandomChapter } from './getRandomChapter'
import { describe, it, expect } from 'vitest'

describe('Get random chapter', () => {
  it('should be return a random chapter', () => {
    const bible = new BibleController('nvi')
    const data = bible.getAllVerses()
    const chapter = getRandomChapter(data)

    expect(chapter).toBeDefined()
  })
})
