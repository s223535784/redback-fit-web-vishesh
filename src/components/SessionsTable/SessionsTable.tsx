import { MouseEventHandler, useCallback, useState } from 'react';
import data from '../SessionsTable/SessionsTable.json';


type Data = typeof data;

type SortKeys = keyof Data[0];

type SortOrder = 'ascn' | 'desc';

function sortData({
	tableData,
	sortKey,
	reverse,
}: {
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;
  }) {
	if (!sortKey) return tableData;
  
	const sortedData = data.sort((a, b) => {
		return a[sortKey] > b[sortKey] ? 1 : -1;
	});
  
	if (reverse) {
		return sortedData.reverse();
	}
  
	return sortedData;
}
  
function SortButton({
	sortOrder,
	columnKey,
	sortKey,
	onClick,
}: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }) {
	return (
		<button style={{ backgroundColor:'black' }}
			onClick={onClick}
			className={`${
				sortKey === columnKey && sortOrder === 'desc'
					? 'sort-button sort-reverse'
					: 'sort-button'
			}`}
		>
        ▲
		</button>
	);
}

function SessionTable({ data }: { data: Data }) {
	const [sortKey, setSortKey] = useState<SortKeys>('coach');
	const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');
  
	const headers: { key: SortKeys; label: string }[] = [
		{ key: 'id', label: 'Session' },
		{ key: 'coach', label: 'Coach' },
		{ key: 'duration', label: 'Duration' },
		{ key: 'date', label: 'Date' },
		{ key: 'typeOfTraining', label: 'Training' },
	];
  
	const sortedData = useCallback(
		() => sortData({ tableData: data, sortKey, reverse: sortOrder === 'desc' }),
		[data, sortKey, sortOrder]
	);
  
	function changeSort(key: SortKeys) {
		setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
  
		setSortKey(key);
	}
  
	return (
		<table>
			<thead>
				<tr>
					{headers.map((row) => {
						return (
							<td key={row.key}>
								{row.label}{' '}
								<SortButton
									columnKey={row.key}
									onClick={() => changeSort(row.key)}
									{...{
										sortOrder,
										sortKey,
									}}
								/>
							</td>
						);
					})}
				</tr>
			</thead>
  
			<tbody>
				{sortedData().map((person) => {
					return (
						<tr key={person.id}>
							<td>{person.id}</td>
							<td>{person.coach}</td>
							<td>{person.duration}</td>
							<td>{person.date}</td>
							<td>{person.typeOfTraining}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
  
export default SessionTable;

