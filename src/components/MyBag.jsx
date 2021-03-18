import React from 'react';
import { connect } from 'react-redux';

const MyBag = ({ basketProps }) => {

    const data = basketProps.Carts;
    localStorage.setItem(`CartItem`, JSON.stringify(data));

    // const store = localStorage.getItem('CartItem', JSON.parse(setStore))
    // console.log(store)
    const ShowData = () => {
        return (
            <>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Height</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((el, id) => {
                                return (
                                    <tr>
                                        <th>{id + 1}</th>
                                        <th>{el.name}</th>
                                        <th>{el.weight}</th>
                                        <th>{el.height}</th>

                                    </tr>
                                )
                            })


                        }
                    </tbody>
                </table>
            </>
        )
    }

    return (


        <div>
            <div className="container">
                <div className="row">
                    {ShowData()}
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps)(MyBag)

