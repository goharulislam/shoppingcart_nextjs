type propsLabel = {
    children: string,
    htmlFor: string
}

export default function Label(props: propsLabel){
    return (
        <label htmlFor={props.htmlFor} className="block text-sm font-medium leading-6 text-gray-900">{props.children}</label>
    );
}