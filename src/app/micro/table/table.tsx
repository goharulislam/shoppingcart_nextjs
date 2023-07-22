import {useMemo} from 'react';
import {useTable, useSortBy, usePagination} from 'react-table';
import {FaSortUp, FaSortDown} from "react-icons/fa";

export const Table = (props: any) =>{
    const columns = useMemo(() => props.COLUMNS, []);
    const data = useMemo(() => props.MOCK_DATA, []);

    const {getTableProps, getTableBodyProps, headerGroups, footerGroups, page, nextPage, previousPage,  canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, setPageSize, state, prepareRow } = useTable({
        columns,
        data,
        initialState: {pageIndex: 0}
    }, useSortBy, usePagination);

    const {pageIndex, pageSize} = state;

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table {...getTableProps()} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th scope="col" className="px-6 py-3" {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? <FaSortDown /> : <FaSortUp />) : ''}
                                    </span>
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map((row, index: number) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                {
                                    row.cells.map((cell, index: number) => {
                                        return <td className="px-6 py-4" key={index} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                    )})
                }
            </tbody>
        </table>
        <div>
            <span>Page{' '}<strong>{pageIndex+1} of {pageOptions.length}</strong>{' '}</span>
            <span>| Go to page:{' '}<input type='number' defaultValue={pageIndex+1} onChange={(e)=>{
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
            }} style={{width:'70px'}} /></span>
            <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 inline-block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                {
                    [10,25,50].map(pageSize=>(
                        <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                    ))
                }
            </select>
            <nav aria-label="Page navigation example" className='float-right'>
                <ul className="inline-flex -space-x-px text-sm">
                    <li><button disabled={!canPreviousPage} onClick={()=>gotoPage(0)} className='flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>{'<<'}</button></li>
                    <li><button disabled={!canPreviousPage} onClick={()=>previousPage()} className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Previous</button></li>
                    <li><button disabled={!canNextPage} onClick={()=>nextPage()} className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Next</button></li>
                    <li><button disabled={!canNextPage} onClick={()=>gotoPage(pageCount-1)} className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>{'>>'}</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    )
}