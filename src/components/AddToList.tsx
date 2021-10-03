import React, { useState } from 'react'
import { IState as Props } from '../App';

// we create an interface is because we're asking for
// [people] and [setPeople]
interface IProps {
    people: Props["people"] // people will be type props of people
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: "",
        born: "",
        img: "",
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => { // return void(nothing)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (
            !input.name ||
            !input.born ||
            !input.img
        ) {
            return
        }

        setPeople([
            ...people, // keeping all previous people objects
            {
                name: input.name,
                born: parseInt(input.born),
                url: input.img,
                note: input.note
            }
        ]);
        // Clear form after added to list
        setInput({
            name: "",
            born: "",
            img: "",
            note: ""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="number"
                placeholder="Born"
                className="AddToList-input"
                value={input.born}
                onChange={handleChange}
                name="born"
            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
                value={input.img}
                onChange={handleChange}
                name="img"
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList
