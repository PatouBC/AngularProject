import { Category} from './category';
import { Indication } from './indication';

export class Product {
    id: number;
    name: string;
    state: string;
    effect: string;
    category: Category;
    indications: Indication[];
    image: string;
}
