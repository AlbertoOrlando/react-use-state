export default function LanguageAndInfo(props) {
    return (
        <div className="card">
            <h3>{props.activeLanguage ? props.activeLanguage.title : ""}</h3>
            <p>{props.activeLanguage ? props.activeLanguage.description : "Nessun linguaggio selezionato"}</p>
        </div>

    )
}