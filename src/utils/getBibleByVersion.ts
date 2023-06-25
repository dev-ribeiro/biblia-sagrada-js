import { BibleVersion } from '../@types/bible';
import nvi from '../assets/pt-br/nvi.json';
import aa from '../assets/pt-br/aa.json';
import acf from '../assets/pt-br/acf.json';

export function getBibleByVersion(version: BibleVersion): any[] {
    switch (version) {
        case ('nvi'):
            return nvi;

        case ('aa'):
            return aa;

        case ('acf'):
            return acf;

        default:
            return nvi;
    }
}
