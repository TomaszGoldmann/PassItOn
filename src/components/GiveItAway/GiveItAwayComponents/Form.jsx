import React, {useState} from 'react';
import Decoration from "../../../assets/Decoration.svg";
import {Important} from "./Important.jsx";

const dataMessage = ["Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.",
    "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.",
    "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
    "Podaj adres oraz termin odbioru rzeczy."]
const dataCheckbox = ["ubrania, które nadają się do ponownego użycia", "ubrania, do wyrzucenia", "zabawki", "książki", "Inne"]

function Step1({checkboxes, setCheckboxes}) {
    const handleCheckboxChange = (index) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index] = !updatedCheckboxes[index];
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <div className="form__step step2">
            <h2 className={"form__step-title"}>Zaznacz co chcesz oddać:</h2>
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
                    <span className="checkbox-text">{dataCheckbox[index]}</span>
                </label>
            ))}
        </div>
    );
}

function Step3() {
    return (
        <div className="form__step">
            {/* Add input fields and form elements for Step 3 */}
        </div>
    );
}

function Step2() {
    return (
        <div className="form__step">
            {/* Add input fields and form elements for Step 1 */}
        </div>
    );
}

function Step4() {
    return (
        <div className="form__step">
            {/* Add input fields and form elements for Step 4 */}
        </div>
    );
}

function Step5() {
    return (
        <div className="form__step">
            {/* Add input fields and form elements for Step 4 */}
        </div>
    );
}

function Step6() {
    return (
        <div className="form__step hero__content">
            <h1 className="hero__title title">
                Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.
            </h1>
            <img src={Decoration} className="hero__decoration--img" alt={"decoration"}/>
        </div>
    );
}

export const Form = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [checkboxes, setCheckboxes] = useState([false, false, false, false, false]);
    const [message, setMessage] = useState("")

    const nextStep = () => {
        let error

        if (currentStep === 1) {
            error = !checkboxes.includes(true);
        }

        if (!error) {
            setMessage("")
            setCurrentStep(currentStep + 1);
        } else {
            if (currentStep === 1) {
                setMessage("Musisz zaznaczyć co najmniej jedną opcje!")
            }
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
                {currentStep === 1 && <Step1 checkboxes={checkboxes} setCheckboxes={setCheckboxes}/>}
                {currentStep === 2 && <Step2/>}
                {currentStep === 3 && <Step3/>}
                {currentStep === 4 && <Step4/>}
                {currentStep === 5 && <Step5/>}
                {currentStep === 6 && <Step6/>}
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