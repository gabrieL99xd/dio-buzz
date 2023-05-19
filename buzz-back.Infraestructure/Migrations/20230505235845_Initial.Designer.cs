﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using buzz_back.Infraestructure.Context;

#nullable disable

namespace buzz_back.Infraestructure.Migrations
{
    [DbContext(typeof(BuzzContext))]
    [Migration("20230505235845_Initial")]
    partial class Initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("buzz_back.Domain.Entities.Alternative", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("AlternativeDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsCorrect")
                        .HasColumnType("bit");

                    b.Property<int?>("QuestionId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("QuestionId");

                    b.ToTable("Alternatives");
                });

            modelBuilder.Entity("buzz_back.Domain.Entities.Question", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("QuestionDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("QuizzId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("QuizzId");

                    b.ToTable("Questions");
                });

            modelBuilder.Entity("buzz_back.Domain.Entities.Quizz", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Quizzes");
                });

            modelBuilder.Entity("buzz_back.Domain.Entities.Alternative", b =>
                {
                    b.HasOne("buzz_back.Domain.Entities.Question", null)
                        .WithMany("Alternatives")
                        .HasForeignKey("QuestionId");
                });

            modelBuilder.Entity("buzz_back.Domain.Entities.Question", b =>
                {
                    b.HasOne("buzz_back.Domain.Entities.Quizz", null)
                        .WithMany("Questions")
                        .HasForeignKey("QuizzId");
                });

            modelBuilder.Entity("buzz_back.Domain.Entities.Question", b =>
                {
                    b.Navigation("Alternatives");
                });

            modelBuilder.Entity("buzz_back.Domain.Entities.Quizz", b =>
                {
                    b.Navigation("Questions");
                });
#pragma warning restore 612, 618
        }
    }
}
