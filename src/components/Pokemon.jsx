import _ from 'lodash';
import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBasket, renamePokemon } from '../actions/addAction';
import { GetPokemon } from "../actions/pokemonAction";
import NotFound from './until/NotFound';
const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const pokemonState = useSelector(state => state.Pokemon,
        state => state.Cart)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(GetPokemon(pokemonName),

        )
    }, [])
    const ShowData = () => {
        if (!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokeData = pokemonState.data[pokemonName]

            const handleCatch = () => {
                const catchRandom = Math.floor(Math.random() * 100)
                if (catchRandom >= 50) {
                    var rename = prompt("Catch success! now U can rename pokemon ", `${pokeData.name}`);
                    toast.success(`Added ${rename} to basket success`)
                    props.addBasket({
                        ...pokeData,
                        name: rename
                    });
                    // props.renamePokemon(rename)
                }
                else {
                    toast.error("Catch failed")
                }
            }

            return (
                <>
                    <h1 className="name-pokemon">{(pokeData.name).toUpperCase()}</h1>

                    <div className="pokemon-wrapper">
                        <div className="item">
                            <h2>Body</h2>
                            <img src={pokeData.sprites.front_default} alt="" />
                            <img src={pokeData.sprites.back_default} alt="" />
                            <img src={pokeData.sprites.front_shiny} alt="" />
                            <img src={pokeData.sprites.back_shiny} alt="" />
                        </div>

                        <div className="item">
                            <h2>Index</h2>
                            {pokeData.stats.map(data => {
                                return <p>{data.stat.name}{" : "}{data.base_stat}</p>
                            })}
                        </div>

                        <div className="item">
                            <h2>Skill</h2>
                            {pokeData.abilities.map(data => {
                                return <p>{data.ability.name}</p>
                            })}
                        </div>
                        <div className="item">
                            <h2>BMI</h2>
                            <p>Height : {pokeData.height}</p>
                            <p>Weight : {pokeData.weight}</p>
                            <p>BMI : {Math.floor((pokeData.weight) / ((pokeData.height) * 2))}</p>


                        </div>


                    </div>


                    <button className="btn btn-outline-info btn-lg" style={{ marginLeft: "45%", marginTop: "100px" }}
                        onClick={handleCatch}>
                        Catch Pokemon
                    </button>
                    <ToastContainer />
                </>


            )
        }
        if (pokemonState.loading) {
            return (
                <p>Loading...</p>
            )

        }
        if (pokemonState.errMsg !== "") {
            return (
                <p>{pokemonState.errMsg}</p>
            )
        }
        return (<NotFound />)
    }
    return (

        <div>
            {ShowData()}

        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { addBasket, renamePokemon })(Pokemon)
