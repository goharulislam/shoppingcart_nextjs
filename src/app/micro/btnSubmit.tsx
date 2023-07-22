type propsBtnSubmit = {
    children: string,
    onClick?: () => void,
    className?: string,
}

export default function BtnSubmit(props: propsBtnSubmit){
    return (
        <button type='submit' className={props.className +`${' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}`} {...props}>{props.children}</button>
    );
}