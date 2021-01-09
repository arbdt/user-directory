import React from "react";

function ColumnHeader({columns}){
    return (
        <tr>
            {columns.map(({name}) => {
                return (
                    <th className="col" key={name}>
                        {name}
                    </th>
                );
            })}
        </tr>
    );
}

export default ColumnHeader;