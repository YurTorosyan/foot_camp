import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContent } from "./fixtureSlice"
import { StadiumOutlined, SportsOutlined, DeviceHub } from "@mui/icons-material"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

import "./Fixtures.scss"

export default function Live() {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchContent())
  // }, [])

  const { fixtures } = useSelector((state) => state)
  console.log(fixtures)
  function getTime(str) {
    const date = new Date(str)
    const hour = date.getHours().toString()
    const minute = date.getMinutes().toString()
    return `${hour.padStart(2, 0)} : ${minute.padEnd(2, 0)}`
  }
  function winnerScore(home, away) {
    if (home > away) {
      return "home-win"
    } else if (home < away) {
      return "away-win"
    } else {
      return "draw"
    }
  }
  return (
    // <Accordion>
    //         <AccordionItem>
    //             <AccordionItemHeading>
    //                 <AccordionItemButton>
    //                     What harsh truths do you prefer to ignore?
    //                 </AccordionItemButton>
    //             </AccordionItemHeading>
    //             <AccordionItemPanel>
    //                 <p>
    //                     Exercitation in fugiat est ut ad ea cupidatat ut in
    //                     cupidatat occaecat ut occaecat consequat est minim minim
    //                     esse tempor laborum consequat esse adipisicing eu
    //                     reprehenderit enim.
    //                 </p>
    //             </AccordionItemPanel>
    //         </AccordionItem>
    //         <AccordionItem>
    //             <AccordionItemHeading>
    //                 <AccordionItemButton>
    //                     Is free will real or just an illusion?
    //                 </AccordionItemButton>
    //             </AccordionItemHeading>
    //             <AccordionItemPanel>
    //                 <p>
    //                     In ad velit in ex nostrud dolore cupidatat consectetur
    //                     ea in ut nostrud velit in irure cillum tempor laboris
    //                     sed adipisicing eu esse duis nulla non.
    //                 </p>
    //             </AccordionItemPanel>
    //         </AccordionItem>
    //     </Accordion>
    <div className="fixtures">
      <div className="fixtures__container">
        {fixtures.data.map((league, index) => (
          <div
            className="fixtures__items"
            key={crypto.randomUUID() + index + crypto.randomUUID()}
          >
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="fixtures__league">
                      <img src={league[0].league.logo} alt="" />
                      <h1 className="fixtures__league-name">
                        {league[0].league.name}
                      </h1>
                      <span>{league.length}</span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="fixtures__wrapper">
                    {league.map((elem) => {
                      return (
                        <div
                          className="fixtures__item"
                          key={
                            crypto.randomUUID() +
                            elem.fixture.id +
                            crypto.randomUUID()
                          }
                        >
                          <div className="fixtures__general">
                            <div className="fixtures__table">
                              <div className="fixtures__home">
                                <img src={elem.teams.home.logo} alt="" />
                                <p>{elem.teams.home.name}</p>
                              </div>
                              {elem.fixture.periods.first === null ? (
                                <div className="fixtures__score">
                                  <span>{getTime(elem.fixture.date)}</span>
                                </div>
                              ) : (
                                <div className="fixtures__score">
                                  <span
                                    className={
                                      "fixtures__score-home " +
                                      winnerScore(
                                        elem.goals.home,
                                        elem.goals.away
                                      )
                                    }
                                  >
                                    {elem.goals.home}
                                  </span>
                                  <span>:</span>
                                  <span className="fixtures__score-away">
                                    {elem.goals.away}
                                  </span>
                                </div>
                              )}
                              <div className="fixtures__away">
                                <img src={elem.teams.away.logo} alt="" />
                                <p>{elem.teams.away.name}</p>
                              </div>
                              <div className="fixtures__aditional">
                                {elem.fixture.venue.name && (
                                  <div className="fixtures__info">
                                    <StadiumOutlined />
                                    <p>{elem.fixture.venue.name}</p>
                                  </div>
                                )}
                                {elem.fixture.referee && (
                                  <div className="fixtures__info">
                                    <SportsOutlined />
                                    <p>{elem.fixture.referee}</p>
                                  </div>
                                )}

                                <div className="fixtures__info">
                                  <DeviceHub />
                                  <p>{elem.league.round}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  )
}
