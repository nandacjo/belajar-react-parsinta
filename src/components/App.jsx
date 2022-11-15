import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons';
import Card from './components/Card';

export default function App() {
    const type = 'submit';
    const onClick = () => console.log('Register with another style..');

    return (
        <div className='text-3xl bg-slate-900 grid place-content-center min-h-screen font-bold'>
            {/* <div className='flex gap-x-2 max-w-xs flex-wrap gap-y-2'>
                <Button className='bg-green-700' text='Google' />

                <Button {...{ type, onClick }}>
                    <IconBrandTwitter />
                    Register
                </Button>
                <Button onClick={() => console.log('Register')}>
                    <IconBrandTwitter />
                    Register
                </Button>
                <Button className='bg-sky-600' onClick={() => console.log('Login')} type='submit'>
                    <IconBrandFacebook />
                    Login
                </Button>

                <Button className='bg-black' onClick={() => console.log('Github')} type='submit'>
                    <IconBrandGithub />
                    Github
                </Button>
            </div> */}

            <div class='max-w-md w-full'>
                <Card>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque amet omnis sunt ex, id ab officia impedit harum saepe, voluptatem
                    autem expedita facere quia fuga? Ea aliquam atque non aperiam.
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
