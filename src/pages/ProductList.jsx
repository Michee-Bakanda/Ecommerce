import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import styledComponents from 'styled-components'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styledComponents.div`
    
`
const Title = styledComponents.h1`
    margin: 20px
`
const FilterContainer = styledComponents.div`
    display: flex;
    justify-content: space-between
`
const Filter = styledComponents.div`
    margin: 20px
`

const FilterText = styledComponents.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px
`

const Select = styledComponents.select`
    padding: 10px;
    margin-right: 20px;
    // margin-left: 10px
`
const SelectOptions = styledComponents.option`
    
`


const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <hr/>
        <Title>Dresses</Title>
        <FilterContainer >
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <SelectOptions>white</SelectOptions>
                    <SelectOptions>Black</SelectOptions>
                    <SelectOptions>Red</SelectOptions>
                    <SelectOptions>blue</SelectOptions>
                    <SelectOptions>Yellow</SelectOptions>
                    <SelectOptions>Green</SelectOptions>
                </Select>
                <Select>
                    <SelectOptions disabled selected>Size</SelectOptions>
                    <SelectOptions>XS</SelectOptions>
                    <SelectOptions>S</SelectOptions>
                    <SelectOptions>M</SelectOptions>
                    <SelectOptions>L</SelectOptions>
                    <SelectOptions>XL</SelectOptions>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <SelectOptions selected>Newest</SelectOptions>
                    <SelectOptions>Price asc</SelectOptions>
                    <SelectOptions>Price desc</SelectOptions>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList