import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
//render ile istenilen bir componenti render edebiliyoruz.
//screen ile DOM'da olan herhangi bir nesneyi yakalayabiliyiriz

import TestedComponent from './TestedComponent'

describe('Counter Tests', () => {

    let increaseBtn, decreaseBtn, count;

    {/*Testler çalışmadan önce istenilen işlemlerin yapılmasını istiyorsak beforeEach kullanırız. */}
    beforeEach(()=>{
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<TestedComponent/>);
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
        count = screen.getByText("0")
    })

    // Bütün testlerden önce bir kere çalışır sonra bir daha çalışmaz
    beforeAll(() => {
        console.log('Bir kere çalışacağım')
    })

    afterEach(()=> {
        console.log('Her testten sonra çalışacağım')
    })

    afterAll(() => {
        console.log('En son bir kere çalışacağım')
    })
    
    //Burada yazılan açıklama hata alındığında neyin hata verdiğini anlamak için 
    test('increase btn', () => {
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    })

    //Decrease butonu için test
    test('decrease btn', () => {
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    })
})


//Burada yazılan açıklama hata alındığında neyin hata verdiğini anlamak için 
// test('increase btn', () => {
//     {/*render ile test edilmesini istediğimiz componenti seçiyoruz. */}
//     render(<TestedComponent/>);

//      {/*Burada 0 textine sahip elementi seçiyoruz. */}
//     const count = screen.getByText("0")

//     {/*Burada Increase textine sahip butonu seçiyoruz. */}
//     const increaseBtn = screen.getByText("Increase");

//     {/*userEvent'i ile increase textine sahip butona tıklama eventi gerçekleştiriyoruz */}
//     userEvent.click(increaseBtn);

//     {/*butona basıldığında 0 değerine sahip count elementi 1 olmalı*/}
//     expect(count).toHaveTextContent("1");
// })

//Decrease butonu için test
// test('decrease btn', () => {
//     {/*render ile test edilmesini istediğimiz componenti seçiyoruz. */}
//     render(<TestedComponent/>);

//      {/*Burada 0 textine sahip elementi seçiyoruz. */}
//     const count = screen.getByText("0")

//     {/*Burada Increase textine sahip butonu seçiyoruz. */}
//     const decreaseBtn = screen.getByText("Decrease");

//     {/*userEvent'i ile increase textine sahip butona tıklama eventi gerçekleştiriyoruz */}
//     userEvent.click(decreaseBtn);

//     {/*butona basıldığında 0 değerine sahip count elementi 1 olmalı*/}
//     expect(count).toHaveTextContent("-1");
// })