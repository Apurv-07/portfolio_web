import React from 'react'
import './Card.css'

function Card({ title ,svg}) {
    return (
        <div>
            <div class="ag-format-container">
                <div class="ag-courses_box">
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                {title}   
                            </div>
                           
                            <img src={svg} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
