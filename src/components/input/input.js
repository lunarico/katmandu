import './_input.scss'

export const Input = ({id, label, value, onChange}) => {
    return (
        <div className="labInp">
            <label>{label}</label>
            <input 
                onChange={({target}) => onChange(id, target.value)} 
                type="text" 
                value={value}> 
            </input>
        </div>
    )
}