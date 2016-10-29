import STextField from './stext-field';
import Num from './Num';

import { StreamLoop, Cell } from 'sodiumjs';

class SSpinner
{
    private value: Cell<number>;

    constructor(initValue: number)
    {
        const sSetValue: StreamLoop<number> = new StreamLoop<number>();
        const textField: STextField = new STextField(String(initValue), sSetValue.map(v => String(v)));

        this.value = textField.text.map(text =>
        {
            Num.tryParse(text);
        });
    }

}

export default SSpinner;