import Link from "next/link";
import fetch from "node-fetch";

export default function SkyWalker(props) {

    return (
        <>
            <h1>This page was generated at build-time, even though the information displayed comes from an API</h1>

            <p>
                <strong>{props.luke.name}</strong> is {props.luke.gender}, {props.luke.height}cm tall and weighs {props.luke.mass}kg.<br/>
                He has {props.luke.hair_color} hair, {props.luke.eye_color} eyes and {props.luke.skin_color} skin.<br/>
                Year of birth: {props.luke.birth_year}
            </p>

            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}

export async function getStaticProps() {

    let response = await fetch("https://swapi.dev/api/people/1/", {
        method: 'GET',
        headers: {
            contentType: 'application/json'
        }
    });

    let json = await response.json();

    console.log(json);

    return {
        props: {
            luke: json
        }
    }
}
