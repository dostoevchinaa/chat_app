import React from 'react'

const GenderCheckbox = () => {
    return (
        <div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Мужской</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Женский</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                </label>
            </div>
        </div>

    )
}

export default GenderCheckbox
