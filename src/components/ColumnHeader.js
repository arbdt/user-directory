import React from "react";

function ColumnHeader({columns}){
    return (
        <tr>
            {columns.map(({name}) => {
                return (
                    <th className="col">
                        {name}
                    </th>
                );
            })}
        </tr>
    );
}

export default ColumnHeader;