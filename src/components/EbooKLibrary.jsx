import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
  } from "@material-tailwind/react";
  import React from "react";
  import axios from "axios";
  import LoadingLib from "./LibraryLoader";
   
export default function EbookCard() {
    const [books, setBooks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [searchQuery, setSearchQuery] = React.useState("Harry Potter");
    const [change, setChange] = React.useState("");
    const times = 20;

    const onChange = ({ target }) => setChange(target.value);
    const onClick = () => setSearchQuery(change);

    React.useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://localhost:8000/api/book/search", {
                    params: { query: searchQuery },
                });

                if (response.status === 200) {
                    setBooks(response.data.books || []); // Ensure data fallback
                } else {
                    console.error(response.data.message || "Error fetching books");
                }
            } catch (error) {
                console.error("Error fetching books:", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [searchQuery]);

    return (
        <div className="pr-6 overflow-x-hidden">
            <div className="relative flex w-full max-w-[24rem]">
                <Input
                    type="text"
                    label="E-Book Search"
                    value={change}
                    onChange={onChange}
                    className="pr-20"
                    containerProps={{
                    className: "min-w-0",
                    }}
                />
                <Button
                    size="sm"
                    color={change ? "gray" : "blue-gray"}
                    disabled={!change.trim()}
                    className="!absolute right-1 top-1 rounded-full "
                    onClick={onClick}
                >
                    Search
                </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                {loading ? (
                    <div className="col-span-3 grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[...Array(times)].map((_, index) => (
                        <LoadingLib key={index} />
                    ))}
                  </div>
                ) : (
                    books.map((book, index) => {
                        const obj = book.obj || {}; // Ensure obj is at least an empty object
                        const coverUrl = obj.covers || "https://via.placeholder.com/150"; // Fallback cover image
                        const downloadLink = obj.download_links || null; // Null if no valid download link

                        return (
                            <Card key={index} className="w-96">
                                <CardHeader shadow={false} floated={false} className="h-96">
                                    <img
                                        src={coverUrl}
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-2 flex gap-2 items-center justify-between">
                                        <Typography color="blue-gray" className="font-bold p-2 ">
                                            {book.title || "Unknown Title"} {/* Fallback title */}
                                        </Typography>
                                        <Typography color="blue-gray" className="font-medium">
                                            By: {book.author || "Unknown Author"} {/* Fallback author */}
                                        </Typography>
                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal opacity-75 p-2"
                                    >
                                        Published: {book.first_publish_year || "Unknown Year"} {/* Fallback year */}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button
                                        ripple={false}
                                        fullWidth={true}
                                        disabled={!downloadLink}
                                        onClick={() => {
                                            if (downloadLink) {
                                                const link = document.createElement("a");
                                                link.href = downloadLink;
                                                link.download = ""; // Optional: Specify a filename
                                                link.click();
                                            }
                                        }}
                                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                    >
                                        {downloadLink ? "Download" : "Not Available"}
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })
                )}
            </div>

        </div>
    );
}