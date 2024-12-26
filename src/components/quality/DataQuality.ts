import quality1 from './../../assets/quality1.svg'
import quality2 from './../../assets/quality2.svg'
import quality3 from './../../assets/quality3.svg'

export interface DataQualityItem {
	img: string
	title: string
	desc: string
}

const DataQuality: DataQualityItem[] = [
	{
		img: quality1,
		title: 'Speed',
		desc: 'Open a commercial-grade current account from anywhere',
	},
	{
		img: quality2,
		title: 'Design',
		desc: 'Open a commercial-grade current account from anywhere',
	},
	{
		img: quality3,
		title: 'Modularity',
		desc: 'Open a commercial-grade current account from anywhere',
	},
]

export default DataQuality
