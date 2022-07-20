import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import TodoProject from './TodoProject';

describe("Todo testleri", () => {

    let button, input;


    beforeEach(()=> {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<TodoProject/>);

        //Butonu text değeri ile seçiyoruz
        button = screen.getByText("Add")
        input = screen.getByLabelText("Text")
    });

    test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
        //burada varsayılan olarak list'e eklenmiş elemanları bulmamızı sağlar. Item textine sahip butun elemanları alır
        const items = screen.getAllByTest(/Item/i);

        //burada yukarıda seçilmiş Item textine sahip 3 eleman olması gerektiğini belirtiyoruz.
        expect(items.length).toEqual(3)
    })

    test("Input ve button dökümanda bulunmalı", () => {
        //Doküman içerisinde button ve input elementlerinin olmasını bekliyoruz.
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test("Inputa girilen değer butona basılınca listeye eklenmeli ve listelenmeli", () => {
        const name = "Ufuk";
        //type metodu ile nereye ne yazacağımızı belirtiyoruz useEvent'ini kullnarak
        userEvent.type(input, name);
        //butona tıklanmasını sağlıyoruz.
        userEvent.click(button);

        //çıktının ne olması bekleniyorsa onu yazıyoruz.
        expect(screen.getByText(name)).toBeInTheDocument();
    })
})