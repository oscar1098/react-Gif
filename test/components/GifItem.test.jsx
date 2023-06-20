import { render,screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas ebn <GifItem/>', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('Debe hacer match con el snapshot', () => { 

        const {container} = render(<GifItem title={title} url={url}/>);
        expect( container ).toMatchSnapshot();
     });

     test('DEve mostrar la imagen con el URL y el alt indicado', () => {
        
        render(<GifItem title={title} url={url}/>);
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( alt ).toBe(title);
        expect( src ).toBe(url);

      });

      test('Debe de mostrar el titulo del componente', () => { 

        render(<GifItem title={title} url={url}/>);
        expect( screen.getByText( title ) ).toBeTruthy();
       })
 });