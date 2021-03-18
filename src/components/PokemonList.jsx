import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from "lodash"
import { GetPokemonList } from "../actions/pokemonAction"
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import NotFound from './until/NotFound'
const PokemonList = (props) => {
    const [search, setSearch] = useState("");
    const pokemonList = useSelector(state => state.PokemonList)
    const dispatch = useDispatch();
    React.useEffect(() => {
        FetchData(1)
    }, [])

    const FetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
    }
    const ShowData = () => {
        if (!_.isEmpty(pokemonList.data)) {
            return (
                <>
                    {pokemonList.data.map((poke, id) => {
                        return (
                            <div key={id} className={"alert alert-primary"} role="alert" >
                                <p>{(poke.name).toUpperCase()}</p>
                                <Link className="show-info" to={`/pokemon/${poke.name}`} >Show Detail</Link>
                            </div>)
                    })}
                </>
            )
        }
        if (pokemonList.loading) {
            return <p>Loading...</p>
        }
        if (pokemonList.errMsg !== "") {
            return <p>{pokemonList.errMsg}</p>
        }
        return (<NotFound />)
    }
    return (
        <div>
            <div className="input-group mb-3 m">
                <input type="input" className="form-control"
                    placeholder="input pokemon name"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-info"
                        type="button"
                        id="button-addon2"
                        onClick={() => props.history.push(`/pokemon/${search}`)}>Search</button>
                </div>
            </div>
            <div className="list-wrapper">
                {ShowData()}


                {!_.isEmpty(pokemonList.data) && (
                    <ReactPaginate
                        pageCount={Math.ceil(pokemonList.count / 10)}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={1}
                        onPageChange={(data) => FetchData(data.selected + 1)}
                        containerClassName={"pagination"}

                    />)
                }
            </div>






        </div>

    )
};

export default PokemonList
