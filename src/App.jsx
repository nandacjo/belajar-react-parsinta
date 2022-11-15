import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons';
import Button from './components/Button';
import Card from './components/Card';

export default function App() {
    const type = 'submit';
    const onClick = () => console.log('Register with another style..');

    return (
        <div className=' bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'>
            <div class='max-w-2xl flex items-center gap-x-4 w-full'>
                {/* <Card title={'Hello World'} footer={<Button>Register</Button>}> */}
                <Card>
                    <Card.Title>Hello Bangke</Card.Title>
                    <Card.Body>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam rerum dicta maxime ea, laborum inventore commodi minus
                            quae non eum aut nulla eos alias dolorum cumque mollitia unde velit fugiat!
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <Button>Regiter</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Title>Hello Bangke</Card.Title>
                    <Card.Body>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam rerum dicta maxime ea, laborum inventore commodi minus
                            quae non eum aut nulla eos alias dolorum cumque mollitia unde velit fugiat!
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <Button>Regiter</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

// const Title = () => (
//     <>
//         <h1>Hello World</h1>
//         <h2>Hello Satrunys</h2>
//     </>
// )

// const Button = (props) => {
//     const { className = 'bg-blue-600', children, text, type = 'submit' } = props;
//     return (
//         // <button {...props} className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2  text-white px-4 py-2 rounded`}>
//         //     {text || children}
//         // </button>

//         // menggunakan plugin clsx
//         <button
//             {...props}
//             type={type}
//             className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2  text-white px-4 py-2 rounded')}>
//             {text || children}
//         </button>
//     );
// }
