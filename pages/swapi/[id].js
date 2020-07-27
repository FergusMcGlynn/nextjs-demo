import Link from "next/link";
import fetch from "node-fetch";

export default function Swapi(props) {
    let pronounString;

    if (props.person.gender === 'male') {
        pronounString = 'He has'
    } else if (props.person.gender === 'female') {
        pronounString = 'She has'
    } else {
        pronounString = 'They have'
    }

    let genderString = props.person.gender !== 'n/a' ? `is ${props.person.gender}` : 'has no gender'
    let hairString = (props.person.hair_color === 'n/a' || props.person.hair_colour === 'none') ? 'no' : props.person.hair_color

    return (
        <>
            <h1>This page was server-rendered, including the API info</h1>

            <p>
                <strong>{props.person.name}</strong> {genderString}, is {props.person.height}cm tall and weighs {props.person.mass}kg.<br/>
                {pronounString} {hairString} hair, {props.person.eye_color} eyes and {props.person.skin_color} skin.<br/>
                Year of birth: {props.person.birth_year}
            </p>

            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}

export async function getServerSideProps(context) {

    let response = await fetch(`https://swapi.dev/api/people/${context.params.id}/`, {
        method: 'GET',
        headers: {
            contentType: 'application/json'
        }
    });

    let json = await response.json();

    console.log(json);

    return {
        props: {
            person: json
        }
    }
}
