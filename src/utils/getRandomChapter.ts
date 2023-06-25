import { BibleType } from "../@types/bible";
import { CustomError } from "./CustomError";

export function randomChapter(bible: BibleType[]) {
  try {
    const chapterKey = bible.map(chapter => chapter.name)
    const randomBook = chapterKey[~~(Math.random() * chapterKey.length)]
    const selectedBook = bible.filter(item => item.name === randomBook)[0]

    if(!selectedBook) throw new CustomError('Invalid book')

    const randomChapter = ~~(Math.random() * selectedBook.chapters.length)

    const verses = selectedBook.chapters[randomChapter - 1]

    return {
      book: selectedBook.name,
      chapter: randomChapter,
      verses
    }
  } catch (error) {
    throw error
  }
}
