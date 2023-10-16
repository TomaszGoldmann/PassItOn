import React, {useState} from 'react';
import Decoration from "../../../assets/Decoration.svg";
import {Important} from "./Important.jsx";

const dataMessage = ["Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.",
    "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.",
    "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
    "Podaj adres oraz termin odbioru rzeczy."]

function Step1() {
    return (
        <div className="form__step">
            {/* Add input fields and form elements for Step 1 */}
        </div>
    );
}

function Step2() {
    return (
        <div className="form__step">
            {/* Add input fields and form elements for Step 2 */}
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

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    }


    return (
        <div className="container form">
            {currentStep < 5 && <Important message={dataMessage[currentStep - 1]}/>}
            <section className="form__steps">
                {currentStep < 5 && <span>Krok {currentStep}/4</span>}
                {currentStep === 1 && <Step1/>}
                {currentStep === 2 && <Step2/>}
                {currentStep === 3 && <Step3/>}
                {currentStep === 4 && <Step4/>}
                {currentStep === 5 && <Step5/>}
                {currentStep === 6 && <Step6/>}

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