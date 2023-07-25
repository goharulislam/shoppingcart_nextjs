type BtnButtonProps = {
    children: React.ReactElement,
    onClick?: () => void,
    class?: string,
    quantity?: number,
}

export default function BtnButton(props: BtnButtonProps){
    return (
        <button type='button' className={props.class +`${' relative text-blue-400 rounded-full border-2 border-blue-400 hover:bg-blue-800 text-xl px-2 text-center inline-flex items-center dark:text-white dark:hover:bg-blue-400'}`} {...props}>{props.children}
            <div className='absolute rounded-full bg-red-600 flex justify-center align-middle text-white right-[-7px] bottom-0 px-2 text-sm'>{props.quantity > 99 ? '99+' : props.quantity}</div>
        </button>
    );
}