import React, { useEffect } from "react";

import { fetchSoccerData } from "../../services/Functions/function";
import { getsoccer } from "../../reducer";
import { useDispatch, useSelector } from "react-redux";

const Soccer = () => {
    const dispatch = useDispatch();
    const soccerData = useSelector((state) => state.counter.soccerData);

    useEffect(() => {
        fetchSoccerData().then((response) => {
            dispatch(getsoccer(response.data));
        });
    }, []);

    return (
        <div className="data-container mb-5">
            <div className="my-3 text-start">
                <h4>Soccer Full Schedule</h4>
                <div>
                    <button className="button-18 mx-1">
                        TQE Picks in Green
                    </button>
                    <button className="button-18 mx-1 bg-secondary">
                        TQE High Confidence Picks
                    </button>
                </div>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <small>Time</small>
                            </th>
                            <th>
                                <small>Home</small>
                            </th>
                            <th>
                                <small>AWAY</small>
                            </th>
                            <th>
                                <small>Implied Prob/Home/TQE Prob</small>
                            </th>
                            <th>
                                <small>Implied Prob/Draw/TQE Prob</small>
                            </th>
                            <th>
                                <small>Implied Prob/Away/TQE Prob</small>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="soccer-table">
                        {soccerData?.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>
                                        <small>{item.EST_schedule}</small>
                                    </td>
                                    <td>
                                        <b>{item.h_team}</b>
                                    </td>
                                    <td>
                                        <b>{item.a_team}</b>
                                    </td>
                                    <td>
                                        <div className="mx-1 py-3 bg-lightgrey text-center">
                                            <b>
                                                {(
                                                    item.m_h_improb * 100
                                                ).toFixed(1)}
                                                % /{item.m_h_odds} /
                                                {(item.m_h_prob * 100).toFixed(
                                                    1
                                                )}
                                                %
                                            </b>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="mx-1 py-3 bg-lightgrey text-center">
                                            <b>
                                                {(
                                                    item.m_t_improb * 100
                                                ).toFixed(1)}
                                                % / {item.m_t_odds} /
                                                {(item.m_t_prob * 100).toFixed(
                                                    1
                                                )}
                                                %
                                            </b>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="mx-1 py-3 bg-lightgrey text-center">
                                            <b>
                                                {(
                                                    item.m_a_improb * 100
                                                ).toFixed(1)}
                                                % / {item.m_a_odds} /{" "}
                                                {(item.m_a_prob * 100).toFixed(
                                                    1
                                                )}
                                                %
                                            </b>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Soccer;
