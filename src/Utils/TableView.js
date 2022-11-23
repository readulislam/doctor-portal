import { Table } from 'flowbite-react'
import React from 'react'

const TableView = ({heading,data}) => {
  return (
    <Table striped={true}>
    <Table.Head>
        {heading.map((head)=>(<Table.HeadCell>
            {head}
        </Table.HeadCell>))}
    </Table.Head>
    <Table.Body className="divide-y">
        {data.map((d)=>(<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {d.name}
            </Table.Cell>    
            <Table.Cell>
                {d.date}
            </Table.Cell>
            <Table.Cell>
                {d.time}
            </Table.Cell>
            <Table.Cell>
                {d.prescription}
            </Table.Cell>
        </Table.Row>))}
    </Table.Body>
  </Table>
  )
}

export default TableView