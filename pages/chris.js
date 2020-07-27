import Link from "next/link";

export default function SkyWalker() {
    return (
        <>
            <h1>It's Chris!</h1>

            <img src="/images/chris_evans.jpeg" alt="Chris"/>

            <p>Look at his little hat!</p>

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
