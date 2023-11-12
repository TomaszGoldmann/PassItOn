import React, {useState} from 'react';
import Decoration from "../../../assets/Decoration.svg";
import {Important} from "./Important.jsx";
import arrowDown from "../../../assets/Arrow Down.png"

const dataMessage = ["Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.",
    "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.",
    "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
    "Podaj adres oraz termin odbioru rzeczy."]
const dataCheckbox = ["ubrania, które nadają się do ponownego użycia", "ubrania, do wyrzucenia", "zabawki", "książki", "Inne"]

const titles = [
    'Zaznacz co chcesz oddać:',
    'Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:',
    'Lokalizacja:',
    'Podaj adres oraz termin odbioru rzecz przez kuriera',
    'Podsumowanie Twojej darowizny',
    'Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.'
]

function Step1({title, checkboxes, setCheckboxes}) {
    const handleCheckboxChange = (index) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index] = !updatedCheckboxes[index];
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <div className="form__step step2">
            <h2 className={"form__step-title"}>{title}</h2>
            {checkboxes.map((isChecked, index) => (
                <label key={`checkbox${index}`} className="checkbox-label">
                    <input
                        type="checkbox"
                        name={`checkbox${index + 1}`}
                        checked={isChecked}
                        onChange={() => handleCheckboxChange(index)}
                        className="checkbox-input"
                    />
                    <div className={`checkbox ${isChecked ? 'filled' : ''}`}/>
                    <span className="checkbox-text span">{dataCheckbox[index]}</span>
                </label>
            ))}
        </div>
    );
}

function Step2({title, selected, setSelected}) {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        console.log(selected)
        setOpen(prevState => !prevState)
    }

    const handleSelect = (event) => {
        setOpen(true)
        setSelected(event.target.innerText)
    }

    return (
        <div className="form__step">
            <h2 className={"form__step-title"}>{title}</h2>
            <div className={"select"}>
                <span className="select-text span">Liczba 60l worków</span>
                <div className="select-box span" onClick={handleOpen}>
                    <span className="select-value span">{selected ? selected : "— wybierz —"}</span>
                    <img src={arrowDown} alt={"arrow down"}
                         style={{transition: "0.5s", transform: `rotate(${open ? '180deg' : '0deg'})`}}/>
                    {open && <div className="select-options">
                        <span className="select-option" onClick={handleSelect}>1</span>
                        <span className="select-option" onClick={handleSelect}>2</span>
                        <span className="select-option" onClick={handleSelect}>3</span>
                        <span className="select-option" onClick={handleSelect}>4</span>
                        <span className="select-option" onClick={handleSelect}>5</span>
                    </div>}
                </div>
            </div>
        </div>
    );
}

function Step3({title}) {
    return (
        <div className="form__step">
            <h2 className={"form__step-title"}>{title}</h2>
        </div>
    );
}

function Step4({title}) {
    return (
        <div className="form__step">
            <h2 className={"form__step-title"}>{title}</h2>
        </div>
    );
}

function Step5({title}) {
    return (
        <div className="form__step">
            <h2 className={"form__step-title"}>{title}</h2>
        </div>
    );
}

function Step6({title}) {
    return (
        <div className="form__step hero__content">
            <h1 className="hero__title title">
                {title}
            </h1>
            <img src={Decoration} className="hero__decoration--img" alt={"decoration"}/>
        </div>
    );
}

export const Form = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [checkboxes, setCheckboxes] = useState([false, false, false, false, false]);
    const [selected, setSelected] = useState("")
    const [message, setMessage] = useState("")

    const nextStep = () => {
        let error

        if (currentStep === 1 && !checkboxes.includes(true)) {
            error = "Musisz zaznaczyć co najmniej jedną opcje!"
        }

        if (currentStep === 2 && !selected) {
            error = "Zaznacz liczbę worków";
        }

        if (!error) {
            setMessage("")
            setCurrentStep(currentStep + 1);
        } else {
            setMessage(error)
        }
    }

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    }


    return (
        <div className="container form">
            {currentStep < 5 && <Important message={dataMessage[currentStep - 1]}/>}
            <section className="form__steps">
                {currentStep < 5 && <span className={"form__steps-currentStep"}>Krok {currentStep}/4</span>}
                {currentStep === 1 && <Step1 title={titles[0]} checkboxes={checkboxes} setCheckboxes={setCheckboxes}/>}
                {currentStep === 2 && <Step2 title={titles[1]} selected={selected} setSelected={setSelected}/>}
                {currentStep === 3 && <Step3 title={titles[2]}/>}
                {currentStep === 4 && <Step4 title={titles[3]}/>}
                {currentStep === 5 && <Step5 title={titles[4]}/>}
                {currentStep === 6 && <Step6 title={titles[5]}/>}
                {message && <span className={"form__message"}>{message}</span>}
                <div className="form__buttons">
                    {currentStep > 1 && (
                        <button onClick={prevStep} className="form__button form__button--back button">Wstecz</button>
                    )}

                    {currentStep < 5 && (
                        <button onClick={nextStep}
                                className="button form__button form__button--next button">Dalej</button>
                    )}

                    {currentStep === 5 && (
                        <button onClick={nextStep}
                                className="button form__button form__button--confirm">Potwierdzam</button>
                    )}
                </div>
            </section>
        </div>
    )
}