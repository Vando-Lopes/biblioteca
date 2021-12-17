import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { CardContent } from "@material-ui/core";
import LinkIcon from '@mui/icons-material/Link';
import PersonIcon from '@mui/icons-material/Person';
import { useStyles } from "../styles"


const Book = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.containerCard}>
      <CardContent className={classes.book} style={{ padding: 0 }}>
        <h1>
          <PersonIcon style={{ verticalAlign: 'middle' }} /> {props.author}
        </h1>
        <h1>
          <LocalLibraryIcon style={{ verticalAlign: 'middle' }} /> {props.title}
        </h1>
        <h1>
          <LinkIcon style={{ verticalAlign: 'middle' }} />{" "}
          <a style={{ textOverflow: "ellipsis" }} href={props.url}>{props.url ? props.url : "Url não informada"}</a>
        </h1>
      </CardContent>
    </div>
  );
};

export default Book;
