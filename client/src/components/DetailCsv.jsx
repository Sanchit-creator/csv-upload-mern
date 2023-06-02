import React from 'react'
import { useContext } from 'react';
import { DataContext } from '../DataContext';
import { CsvToHtmlTable } from 'react-csv-to-table';


const DetailCsv = () => {
    const {data} = useContext(DataContext);
    console.log(data);
  return (
    <>
        <CsvToHtmlTable
            data={data}
            csvDelimiter=";"
            tableClassName="table table-striped table-hover"
        />
    </>
  )
}

export default DetailCsv