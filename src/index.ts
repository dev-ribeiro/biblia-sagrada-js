import { BibleVersion } from './@types/bible.js';
import { BibleController } from './modules/bible/controllers/BibleController.js';

export function createBibleInstance(version: BibleVersion) {
    return new BibleController(version);
}
