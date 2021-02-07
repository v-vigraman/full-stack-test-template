import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getComments, setComments } from "../../actions/index";
import './layout.scss';

const MainLayout = ({commentList, getComments, setComments}) => {

    const [removeIndex, updateRemoveIndex] = useState();
    useEffect(() => {
        getComments();
    }, [getComments]);

    const remove = () => {
        const index = commentList?.findIndex((comment) => comment.id - 1 == removeIndex);
        const tempList = [...commentList];
        tempList.splice(index, 1);
        setComments(tempList);
        updateRemoveIndex('');
    }

    return (
        <div className="wholeWrapper">
            <div className="wrapper">
                <img src="./logo-full.svg" alt="logo" width="80px" />
                <div className="boxModel">
                    <ol>
                        {
                            commentList?.map((comment) => 
                                <li id={comment.id} key={comment.id}>{parseInt(comment.id) - 1}: {comment.email}</li>
                            )
                        }
                    </ol>
                </div>
                <div className="orangeButton">Pull Data</div>
                <div className="flex-box">
                    <input type="number" min="0" value={removeIndex} onChange={(e) => updateRemoveIndex(e.target.value)} className="flex-box" />
                    <div className="orangeButton" onClick={remove}>Remove</div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    commentList: state.user.commentList,
});

export default connect(mapStateToProps, {
    getComments,
    setComments
})(MainLayout);
