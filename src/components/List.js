import React from 'react'

function List(props) {
    function infoRequest(id, name) {
        props.request(id, name)
    }

    return (
        <div className='list'>
            {
                props.fullList.map(el =>
                    <li key={el.id} onClick={() => infoRequest(el.id, el.name)}>
                        <p>{el.name}</p>
                    </li>
                )
            }
        </div>
    )
}

export default List