// export default function Card(props) {
//     const children = props.children;
//     const padding = props.padding;
// }

export default function Card({ children, padding }){
    const myclassname = 'padding-small';
    if(padding === 'large'){
        myclassname = 'padding-large'
    }

    return (
        <div>

        </div>
    );
}



