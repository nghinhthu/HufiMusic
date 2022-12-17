import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import EmptyContent from "../Bottom/EmptyContent";
import LoadingSvg from "../loading/LoadingSvg";
import CarouselItem from "../Selection/CarouselItem";
import PlayListSelector from "../Selection/PlayListSelector";
import ItemChartList from "../TopChartPage/ItemChartList";
import ItemArits from "./ItemArits";
import SliderShow from "./SliderShow";

const MyAlbum = () => {
    const { docs } = useOutletContext();

    if (!docs?.email) return <LoadingSvg></LoadingSvg>;

    return (
        <>
            {docs.myAlbum.length <= 0 && (
                <EmptyContent text={"Chưa có mục yêu thích trong thư viện"} textBtn={"Khám phá ngay"}></EmptyContent>
            )}

            {docs.myAlbum.length > 0 &&
                docs.myAlbum.map((album, index) => {
                    return (
                        <PlayListSelector
                            key={index}
                            classAdd="mb-[36px]"
                            notRow
                            classAdd2="w-full"
                            isMyPage={''
                                // <div className="flex items-center justify-center gap-[10px]">
                                //     <Link to="/mymusic/song" className="personal_play-all">
                                //         Tất Cả <span className="material-icons-outlined ml-[2px]">chevron_right</span>
                                //     </Link>
                                // </div>
                            }
                            title={`Album ${album.name}`}
                        >
                            {album.data && album.data.length > 0 && (
                                <div className="flex items-center justify-between">
                                    <div>
                                        <SliderShow data={album.data}></SliderShow>
                                    </div>
                                    <div className="main_topchart mt-2 flex-1">
                                        <div className="container_zing-chart">
                                            <div className="max-h-[280px] overflow-y-auto zing-chart_list pt-2">
                                                {album.data.map((e, index) => {
                                                    return (
                                                        <ItemChartList
                                                            notAlbum
                                                            onFavourite
                                                            isNoneRank
                                                            item={e}
                                                            index={index}
                                                            key={e.encodeId}
                                                        ></ItemChartList>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </PlayListSelector>
                    );
                })}

            {/* {docs.myAlbum.length > 3 && (
            <PlayListSelector
               classAdd="mb-[36px]"
               notRow
               classAdd2="w-full"
               isMyPage={
                  <div className="flex items-center justify-center gap-[10px]">
                     <Link to="/mymusic/song" className="personal_play-all">
                        Tất Cả <span className="material-icons-outlined ml-[2px]">chevron_right</span>
                     </Link>
                  </div>
               }
               title={"Bài Hát"}
            >
               {docs.favouriteSongs && docs.favouriteSongs.length > 3 && (
                  <div className="flex items-center justify-between">
                     <div>
                        <SliderShow data={docs.favouriteSongs}></SliderShow>
                     </div>
                     <div className="main_topchart mt-2 flex-1">
                        <div className="container_zing-chart">
                           <div className="max-h-[280px] overflow-y-auto zing-chart_list pt-2">
                              {docs.favouriteSongs.map((e, index) => {
                                 return (
                                    <ItemChartList
                                       notAlbum
                                       onFavourite
                                       isNoneRank
                                       item={e}
                                       index={index}
                                       key={e.encodeId}
                                    ></ItemChartList>
                                 )
                              })}
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </PlayListSelector>
         )} */}
        </>
    );
};

export default MyAlbum;
