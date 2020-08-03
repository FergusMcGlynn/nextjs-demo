import Link from "next/link";

export default function Time(props) {

    return (
        <>
            <h1>This page was loaded at <span className="purple">{props.time}</span> and was generated server-side</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>

            <style jsx>{`
                .purple {
                    color: purple
                }
            `}</style>
        </>
    )
}

export async function getServerSideProps() {
    let date = new Date();

    let timeString = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}.${date.getMilliseconds()}`

    return {
        props: {
            time: timeString
        }
    }
}
