
import classes from "./SectionStyle.module.css";
import projectImg from "../images/project-1.png";
// import githubImg from "../images/github.svg";

export default function Section({ sectionName, children }) {
    return (
        <div className={classes.row}>
            <div className={classes['work__box']}>
                <div className={classes['work__text']}>
                    <h3>{sectionName}</h3>
                    {children}
                </div>
                <div className={classes['work__image-box']}>
                    <img src={projectImg} className={classes['work__image']} alt="Project 1" />
                </div>
            </div>
        </div>
    )
}