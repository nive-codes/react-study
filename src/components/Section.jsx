export default function Section({title, children, ...props }){ 
    //...props 라고 해서 모든 든 props를 가지고 오도록 처리 
    //title같이 따로 꺼낸 값은 props에 없음.

    //빌트인 속성으로 사용 가능
    return <section {...props}>
            <h2>{title}</h2>
            {children}
            </section>
}