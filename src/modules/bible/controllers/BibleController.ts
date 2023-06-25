import { BibleVersion, Books } from '../../../@types/bible.js';
import { CustomError } from '../../../utils/CustomError.js';
import { Bible } from '../models/Bible.js';


export class BibleController {
  #biblie;

  constructor(version: BibleVersion) {
    this.#biblie = new Bible(version);
  }

  getAllVerses() {
    return this.#biblie.getAllVerses();
  }

  getChapter(book: Books, chapter: number) {
    try {
      return this.#biblie.getChapter(book, chapter);
    } catch (error) {
      if (error instanceof CustomError) {
        console.error(error.message)
      } else {
        console.error(error)
      }

      return null
    }
  }

  getRandomChapter() {
    return this.#biblie.getRandomChapter()
  }
}
