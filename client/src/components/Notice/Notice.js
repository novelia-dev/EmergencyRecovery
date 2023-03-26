import React,{useState} from "react";

function SearchBox({onSearch}){
    function handleKeyDown(event){
        if(event.key === 'Enter'){
            onSearch(event.target.value);
        }
    }

    return (
        <input type="text" onKeyDown={handleKeyDown} />
    );
}

function NoticeList({notices}){

    const noticeing =[
        {id: 1, title: "공지사항 1", date: "2022-03-25"},
        {id: 2, title: "공지사항 2", date: "2022-03-26"},
        {id: 3, title: "공지사항 3", date: "2022-03-27"},
    ];

    const noticeItems = noticeing.map((notice) => (
        <Notice key = {notice.id} title={notice.title} date={notice.date} />
    ));
        return(
            <div>
                <ul>{noticeItems}</ul>
            </div>
        )
}

function Notice({id,title,date,notices="o"}){

    const [filteredNotices, setFilteredNotices] = useState(notices);

    function handleSearch(query){
        const filtered = notices.filter((notice) => 
        notice.title.toLowerCase().includes(query.toLowerCase()));
        setFilteredNotices(filtered);
    }

    function handleNoticeClick(notice){
        alert(notice.content);
    }

    return(
        <div>
            <div style={{'width':"1200px",'marginLeft':"360px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
            <div style={{marginBottom:"15px",marginLeft:"15px"}}><h3>공지사항</h3></div>
            <div style={{marginBottom:"15px",marginLeft:"15px"}}>업데이트 내용,이벤트, 각종 공지가 올라옵니다.</div>
            </div>
            <div style={{'width':"1200px",'marginLeft':"360px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
            <div style={{'marginLeft':"15px"}}>
                <NoticeList notices={filteredNotices} onItemClick={handleNoticeClick} />
            </div>
            <div style={{'marginLeft':"15px"}}></div>
            <br />
            <SearchBox onSearch={handleSearch} />
            </div>

            </div>
    );
}

export default Notice;