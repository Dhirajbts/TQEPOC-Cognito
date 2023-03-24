import React, { useEffect } from "react";

import { BaseUrl } from "../../services/api/api";
import { fetchNFLData } from "../../services/Functions/function";
import { getNfl } from "../../reducer";
import { useDispatch, useSelector } from "react-redux";

const NFLComponent = () => {
    const dispatch = useDispatch();
    const nflData = useSelector((state) => state.counter.nflData);

    useEffect(() => {
        fetchNFLData().then((response) => {
            dispatch(getNfl(response.data));
        });
    }, []);

    return (
        <div className="data-container">
            <div className="my-3 text-start">
                <h4>NFL Week 23 NFL Picks</h4>
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
                                <small>Matchup</small>
                            </th>
                            <th>
                                <small>Implied Prob/Moneyline/TQE Prob</small>
                            </th>
                            <th>
                                <small>Spread Line/Odds/TQE Prob</small>
                            </th>
                            <th>
                                <small>Total Line/Odds/TQE Prob</small>
                            </th>
                        </tr>
                    </thead>

                    {nflData?.map((item, idx) => {
                        return (
                            <tbody className="nfl-table" key={idx}>
                                <tr>
                                    <td rowSpan={2}>
                                        <small>{item.schedule}</small>
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            <div>
                                                <img
                                                    src={`${BaseUrl}/assets/images/logos/nfl/pills/${item.away_team_abbr}.svg`}
                                                    alt="teamimage"
                                                    width={60}
                                                    height={40}
                                                />
                                            </div>
                                            <div className="w-100 flex-1 text-start mx-2">
                                                <div>
                                                    <small>
                                                        {
                                                            item.away_team_first_name
                                                        }
                                                    </small>
                                                </div>
                                                <p className="m-0">
                                                    <b>
                                                        {item.away_team_last_name.toUpperCase()}
                                                    </b>
                                                </p>
                                                <div>
                                                    <small className="p-0">
                                                        at
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="py-3 bg-lightgrey text-center">
                                            <b>
                                                {(
                                                    item.away_improb * 100
                                                ).toFixed(1)}
                                                % / {item.away_money} /
                                                {(
                                                    item.mpick_prob * 100
                                                ).toFixed(1)}
                                                %
                                            </b>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="py-3 bg-lightgrey text-center">
                                            <b>
                                                {item.away_spread} /
                                                {item.away_odds} /
                                                {(
                                                    item.spick_prob * 100
                                                ).toFixed(1)}
                                                %
                                            </b>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="py-3 bg-lightgrey text-center">
                                            <b>
                                                over {item.OU_line} /
                                                {item.home_odds}/
                                                {(
                                                    item.tpick_prob * 100
                                                ).toFixed(1)}
                                                %
                                            </b>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex">
                                            <div>
                                                <img
                                                    src={`${BaseUrl}/assets/images/logos/nfl/pills/${item.home_team_abbr}.svg`}
                                                    alt="teamimage"
                                                    width={60}
                                                    height={40}
                                                />
                                            </div>
                                            <div className="w-100 flex-1 text-start mx-2">
                                                <div>
                                                    <small>
                                                        {
                                                            item.home_team_first_name
                                                        }
                                                    </small>
                                                </div>
                                                <p className="m-0">
                                                    <b>
                                                        {item.home_team_last_name.toUpperCase()}
                                                    </b>
                                                </p>
                                                <div>
                                                    <small className="p-0">
                                                        at
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="py-3 bg-lightgrey text-center">
                                            <b>
                                                {(
                                                    item.home_improb * 100
                                                ).toFixed(1)}
                                                % / +105 / 61.5%
                                            </b>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="py-3 bg-lightgrey text-center">
                                            <b>
                                                {item.home_spread} /
                                                {item.home_odds}
                                            </b>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="py-3 bg-lightgrey text-center">
                                            <b>
                                                Under {item.OU_line}/
                                                {item.over_odds}
                                            </b>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </div>
    );
};

export default NFLComponent;
